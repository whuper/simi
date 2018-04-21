<?php
class Report_model extends CI_Model {

    public function __construct()
    {
        $this->load->database();
	}

	public function get_users($curpage = 1,$pagesize = 10)
	{
		$start = ($curpage - 1) * $pagesize;
   
        //$query = $this->db->get('tokyohot');
		$query = $this->db->query ("select * from users limit $start,$pagesize");
		//print_r("select * from tokyohot limit $start,$pagesize");
        return $query->result_array();
   
	}
	public function get_user_detail($id = FALSE)
	{
		$query = $this->db->get_where('users', array('id' => $id));
		return $query->row_array();
	}
}
