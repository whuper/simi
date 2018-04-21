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
		$data['list'] = $this->report_model->get_users();
		$data['title'] = 'list';

    echo json_encode($data['list'],JSON_UNESCAPED_UNICODE);
    die();
		$this->load->view('templates/header', $data);
		$this->load->view('report/index', $data);
		$this->load->view('templates/footer');
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
