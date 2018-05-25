<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {
        
        public $status; 
        public $roles;
    
        function __construct(){
            parent::__construct();
            $this->load->model('User_model', 'user_model', TRUE);
            $this->status = $this->config->item('status'); 
            $this->roles = $this->config->item('roles');
        }      
    
	public function index()
	{   
            if(empty($this->session->userdata['email'])){
                //redirect(site_url().'/main/login/');
								die( md5(123456));

            }            
            /*front page*/
            $data = $this->session->userdata; 
            $this->load->view('header');            
            $this->load->view('index', $data);
            $this->load->view('footer');
	}
        
        
        public function register()
        {
             
                if($this->user_model->isDuplicate($this->input->post('userId'))){
                   
                    print_i(array("msg"=>"此用户已经存在"));	
                }else{
                    $clean = $this->security->xss_clean($this->input->post(NULL, TRUE));
										$id = $this->user_model->insertUser($clean);
									 	print_i(array('ok'=>true,'id'=>$id));	
                    
                    
                };              
        }
        
        
        protected function _islocal(){
            return strpos($_SERVER['HTTP_HOST'], 'local');
        }
        
        public function complete()
        {                                   
                    
                $post = $this->input->post(NULL, TRUE);
                
                $cleanPost = $this->security->xss_clean($post);
                
              
                $userInfo = $this->user_model->updateUserInfo($cleanPost);
                
                if(!$userInfo){
                   print_i(array('ok'=>false,'msg'=>'更新失败'));
                }
								print_i(array('ok'=>true,'userInfo'=>$userInfo));
                          
        }
        
        public function login()
        {
          
                $post = $this->input->post();  
                $clean = $this->security->xss_clean($post);
								
                $userInfo = $this->user_model->checkLogin($clean,false);
                
                if(!$userInfo){
                    //$this->session->set_flashdata('flash_message', 'The login was unsucessful');
									print_i(array('ok'=>false,'msg'=>'密码错误'));
                    //redirect(site_url().'main/login');
                }                
                /*foreach($userInfo as $key=>$val){
                    $this->session->set_userdata($key, $val);
                }*/
						
								print_i($userInfo);
                //redirect(site_url().'main/');
            
        }
				public function get_users($curpage = 1,$pagesize = 20)
				{
					$get = $this->input->get();  
					$clean = $this->security->xss_clean($get);

					$curpage = isset($clean['curpage'])? $clean['curpage'] : $curpage ;
					$pagesize = isset($clean['pagesize'])? $clean['pagesize'] : $pagesize ;

					$start = ($curpage - 1) * $pagesize;
					$query = $this->db->query("select * from users limit $start,$pagesize");
					
					$list =  $query->result_array();

					print_i($list);
				 
				}

				public function del()
				{
						$get = $this->input->get();  
						$clean = $this->security->xss_clean($get);
						if(isset($clean['delId'])){
							$id = $clean['delId'];
							$query = $this->db->query ("delete from users where id = $id ");
							if($query){
									print_i(array('ok'=>true,'msg'=>$query));
							} else {
									print_i(array('ok'=>false));
							}
						}
				}

				public function get_user_detail($id = FALSE)
				{
					$query = $this->db->get_where('users', array('id' => $id));
					return $query->row_array();
				}
				public function get_basic_data()
				{
					//$query = $this->db->get_where('users', array('id' => $id));
					//$this->db->query();
					//$list = $query->row_array();

					$this->db->distinct();
					

					$this->db->select('team');
					$this->db->where('team !=',null);  
					$this->db->where('team !=','');  
					$query = $this->db->get('users');
			
					$teams = [];
					foreach ($query->result_array() as $row) {
						$teams[] = $row['team'];
					}

					$this->db->distinct();
					$this->db->select('department');
					$this->db->where('department !=',null);  
					$this->db->where('department !=','');  
					$query = $this->db->get('users');
			
					$departments = [];
					foreach ($query->result_array() as $row) {
						$departments[] = $row['department'];
					}
				
					print_i(array('ok'=>true,'teams'=>$teams,'departments'=>$departments));

				}
				
							
        public function logout()
        {
            $this->session->sess_destroy();
            redirect(site_url().'main/login/');
        }
        
        public function forgot()
        {
            
            $this->form_validation->set_rules('email', 'Email', 'required|valid_email'); 
            
            if($this->form_validation->run() == FALSE) {
                $this->load->view('header');
                $this->load->view('forgot');
                $this->load->view('footer');
            }else{
                $email = $this->input->post('email');  
                $clean = $this->security->xss_clean($email);
                $userInfo = $this->user_model->getUserInfoByEmail($clean);
                
                if(!$userInfo){
                    $this->session->set_flashdata('flash_message', 'We cant find your email address');
                    redirect(site_url().'main/login');
                }   
                
                if($userInfo->status != $this->status[1]){ //if status is not approved
                    $this->session->set_flashdata('flash_message', 'Your account is not in approved status');
                    redirect(site_url().'main/login');
                }
                
                //build token 
				
                $token = $this->user_model->insertToken($userInfo->id);                        
                $qstring = $this->base64url_encode($token);                  
                $url = site_url() . 'main/reset_password/token/' . $qstring;
                $link = '<a href="' . $url . '">' . $url . '</a>'; 
                
                $message = '';                     
                $message .= '<strong>A password reset has been requested for this email account</strong><br>';
                $message .= '<strong>Please click:</strong> ' . $link;             

                echo $message; //send this through mail
                exit;
                
            }
            
        }
        
        public function reset_password()
        {
                $post = $this->input->post(NULL, TRUE);                
								$cleanPost = $this->security->xss_clean($post); 

								$user_p = array('userId'=>$cleanPost['userId'],'password'=>$cleanPost['password']);

								$userInfo = $this->user_model->checkLogin($user_p,false);
                
                if(!$userInfo){
									print_i(array('ok'=>false,'msg'=>'旧密码错误'));
                }              
																
                if(!$this->user_model->updatePassword($cleanPost)){
                    print_i(array('ok'=>false,'msg'=>'密码修改失败'));
                }else{
                    print_i(array('ok'=>true,'msg'=>'密码修改成功'));
                }
                    
           
        }
        
    public function base64url_encode($data) { 
      return rtrim(strtr(base64_encode($data), '+/', '-_'), '='); 
    } 

    public function base64url_decode($data) { 
      return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT)); 
    }       
}
