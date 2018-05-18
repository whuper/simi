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
			$data['list'] = $this->report_model->get_schedules($clean['userId'],$clean['weekNumber']);

			print_i($data['list']);

		}
		public function	postSchedules()
		{
			$post = $this->input->post();  
			$clean = $this->security->xss_clean($post);
			
			$list = $this->report_model->get_schedules($clean['userId'],$clean['weekNumber']);

			if(sizeof($list) > 0){
				print_i(array("msg"=>"你已经提交过了")); 			
			}

			$res = $this->report_model->post_schedules($clean);
			
			if($res){
				print_i(array("msg"=>"ok"));
			
			} else {
				print_i(array("msg"=>"fail"));			
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
