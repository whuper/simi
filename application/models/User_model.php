<?php
class User_model extends CI_Model {

    public $status; 
    public $roles;
    
    function __construct(){
        // Call the Model constructor
        parent::__construct();        
        //$this->status = $this->config->item('status');
        //$this->roles = $this->config->item('roles');
    }    
    
    public function insertUser($d)
    {  
            $string = array(
                'userId'=>$d['userId'],
                'userName'=>$d['userName'],
                'team'=>$d['team'],
                'gender'=>$d['gender'],
                'role'=>'1', 
                'password'=>md5('123456'), 
                'status'=>'1'
            );
            $q = $this->db->insert_string('users',$string);             
            $this->db->query($q);
            return $this->db->insert_id();
    }
    
    public function isDuplicate($userId)
    {     
        $this->db->get_where('users', array('userId' => $userId), 1);
        return $this->db->affected_rows() > 0 ? TRUE : FALSE;         
    }
    
    public function insertToken($user_id)
    {   
        $token = substr(sha1(rand()), 0, 30); 
        $date = date('Y-m-d');
        
        $string = array(
                'token'=> $token,
                'user_id'=>$user_id,
                'created'=>$date
            );
        $query = $this->db->insert_string('tokens',$string);
        $this->db->query($query);
        return $token . $user_id;
        
    }
    
    public function isTokenValid($token)
    {
       $tkn = substr($token,0,30);
       $uid = substr($token,30);      
       
        $q = $this->db->get_where('tokens', array(
            'tokens.token' => $tkn, 
            'tokens.user_id' => $uid), 1);                         
               
        if($this->db->affected_rows() > 0){
            $row = $q->row();             
            
            $created = $row->created;
            $createdTS = strtotime($created);
            $today = date('Y-m-d'); 
            $todayTS = strtotime($today);
            
            if($createdTS != $todayTS){
                return false;
            }
            
            $user_info = $this->getUserInfo($row->user_id);
            return $user_info;
            
        }else{
            return false;
        }
        
    }    
    
    public function getUserInfo($id)
    {
        $q = $this->db->get_where('users', array('id' => $id), 1);  
        if($this->db->affected_rows() > 0){
            $row = $q->row();
            return $row;
        }else{
            error_log('no user found getUserInfo('.$id.')');
            return false;
        }
    }
    
    public function updateUserInfo($post)
    {
        $data = array(
               'userId' => $post['userId'],
               'userName' => $post['userName'],
               'team' => $post['team'],
               'gender' => $post['gender'],
               'email' => $post['email'],
               'phone' => $post['phone'],
               'department' => $post['department'],
               'status' => $post['status'],
            );
				if(isset($post['resetPwd'])){
						$data['password'] = md5(123456);
				}
				if(!isset($post['id'])){
						return false;				
				}
        $this->db->where('id', $post['id']);
        $this->db->update('users', $data); 
        $success = $this->db->affected_rows(); 
        
        if(!$success){
            error_log('Unable to updateUserInfo('.$post['id'].')');
            return false;
        }
        
        $user_info = $this->getUserInfo($post['id']); 
        return $user_info; 
    }
    
    public function checkLogin($post,$md5 = true)
    {
				//$this->db->where('email', $post['email']);
				if(!$md5){
						$post['password'] = md5($post['password']);
				}

				$query = $this->db->get_where('users', array('userId' => $post['userId'],'password' => $post['password']));
				return $query->row_array();
       
    }
    
    public function updateLoginTime($id)
    {
        $this->db->where('id', $id);
        $this->db->update('users', array('last_login' => date('Y-m-d h:i:s A')));
        return;
    }
    
    public function getUserInfoByEmail($email)
    {
        $q = $this->db->get_where('users', array('email' => $email), 1);  
        if($this->db->affected_rows() > 0){
            $row = $q->row();
            return $row;
        }else{
            error_log('no user found getUserInfo('.$email.')');
            return false;
        }
    }
    
    public function updatePassword($post)
    {   
				if(!isset($post['id'])){
						 return false;
				}
        $this->db->where('id', $post['id']);
        $this->db->update('users', array( 'password' => md5($post['newPassword']) )); 
        $success = $this->db->affected_rows(); 
        
        if(!$success){
            error_log('Unable to updatePassword('.$post['userId'].')');
            return false;
        }        
        return true;
    } 
    
}
