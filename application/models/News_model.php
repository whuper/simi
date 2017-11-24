<?php
class News_model extends CI_Model {

    public function __construct()
    {
        $this->load->database();
	}

	public function get_news($id = FALSE)
	{
    if ($id === FALSE)
    {
        //$query = $this->db->get('tokyohot');
		$query = $this->db->query ('select * from tokyohot limit 0,10');
        return $query->result_array();
    }

    $query = $this->db->get_where('tokyohot', array('id' => $id));
    return $query->row_array();
	}
}
