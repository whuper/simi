<?php
class Porns extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->load->helper('url_helper');
    }

    public function index($curpage = 1)
	{
		$this->load->library('pagination');
		$config = $this->page_config();
		$this->pagination->initialize($config); //设置完成分页器
		$data['items'] = $this->news_model->get_news($curpage,$config['per_page']);
		$data['title'] = 'Tokyo-hot page '.$curpage;

		$this->load->view('templates/header', $data);
		$this->load->view('porns/index', $data);
		$this->load->view('templates/footer');
	}

    public function view($id = NULL)
	{
		$data['news_item'] = $this->news_model->get_news_detail($id);

		if (empty($data['news_item']))
		{
			show_404();
		}

		$data['title'] = $data['news_item']['title'];

		$this->load->view('templates/header', $data);
		$this->load->view('porns/view', $data);
		$this->load->view('templates/footer');
	}
	//分页设置
	public function page_config() {
		$config['base_url'] = site_url('porns'); //设置基地址
		$config['total_rows'] = 3000;
		$config['per_page'] = 15; //每页显示的数据数量
		$config['num_links'] = 6;
		$config['use_page_numbers'] = true;
		$config['first_link'] = '首页';
		$config['last_link'] = '末页';
		$config['next_link'] = '下一页';
		$config['prev_link'] = '上一页';
		$config['full_tag_open'] = '<p class="pagination">';
		$config['full_tag_close'] = '</p>';
		return $config;
	}
}
