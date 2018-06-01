<?php
class Report extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('report_model');
        $this->load->helper('url_helper');
    }

    public function index()
		{
			print_i('ok');
			$data['list'] = $this->report_model->get_users();
			$data['title'] = 'list';

			
			$this->load->view('templates/header', $data);
			$this->load->view('report/index', $data);
			$this->load->view('templates/footer');
		}
		public function getSchedules()
		{
			$post = $this->input->post();  
			$clean = $this->security->xss_clean($post);

			//本周的
			$data = $this->report_model->get_schedules($clean['userId'],$clean['weekNumber']);

			if(sizeof($data) > 0){
					print_i(array('thisWeek'=>$data));
			} else {
					//获取上周的
				$weekNumber = intval($clean['weekNumber']) - 1;
				$data = $this->report_model->get_schedules($clean['userId'],$weekNumber);

				if(sizeof($data) > 0){
					print_i(array('prevWeek'=>$data));				
				} else {
					print_i(array('ok'=>true));
				}		
			}

		}
		public function get_reports_by_type()
		{
			$get = $this->input->get();  
			$clean = $this->security->xss_clean($get);

			$data = $this->report_model->get_schedules_by_type($clean);

			print_i(array('ok'=>true,'reports'=>$data));		
		
		}
		public function get_report_info()
		{
				$sql = "SELECT team,count(*) AS counts from reports GROUP BY team";
				$query = $this->db->query($sql);
				$res = $query->result_array();
				print_i(array('ok'=>true,'report_info'=>$res));
			}

		public function	postSchedules()
		{
			$post = $this->input->post();  
			$clean = $this->security->xss_clean($post);
			
			$list = $this->report_model->get_schedules($clean['userId'],$clean['weekNumber']);

			if(sizeof($list) > 0){
				print_i(array('ok'=>false,"msg"=>"你已经提交过了")); 			
			}

			$res = $this->report_model->post_schedules($clean);
			
			if($res){
				print_i(array('ok'=>true,"msg"=>"提交成功") );
			
			} else {
				print_i(array('ok'=>false,"msg"=>"提交失败") );			
			}
	
		}
		public function updateSchedules(){
			$post = $this->input->post();  
			$clean = $this->security->xss_clean($post);

			$res = $this->report_model->update_schedules($clean);
			
			if($res){
				print_i(array("ok"=>"true",'msg'=>'周报修改成功'));
			
			} else {
				print_i(array("ok"=>"false",'msg'=>'Update Failed 没有内容被修改'));			
			}
	
		
		}

    public function view($id = NULL)
		{
			$data['news_item'] = $this->report_model->get_news($id);

			if (empty($data['news_item']))
			{
				show_404();
			}

			$data['title'] = $data['news_item']['title'];

			$this->load->view('templates/header', $data);
			$this->load->view('news/view', $data);
			$this->load->view('templates/footer');
		}
}
