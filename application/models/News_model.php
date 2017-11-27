<?php
class News_model extends CI_Model {

    public function __construct()
    {
        $this->load->database();
	}

	public function get_news($curpage = 1,$pagesize)
	{
		$start = ($curpage - 1) * $pagesize;
   
        //$query = $this->db->get('tokyohot');
		$query = $this->db->query ("select * from tokyohot limit $start,$pagesize");
		//print_r("select * from tokyohot limit $start,$pagesize");
        return $query->result_array();
   
	}
	public function get_news_detail($id = FALSE)
	{
		$query = $this->db->get_where('tokyohot', array('id' => $id));
		return $query->row_array();
	}
}
