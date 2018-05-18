<?php
class Report_model extends CI_Model {

  public function __construct()
    {
        $this->load->database();
		}

	public function get_schedules($userId = 0,$weekNumber = 0)
		{
			if(!$userId || !$weekNumber){
				return;
			}
			//echo "select plans,tasks,extraTasks from reports WHERE userId = $userId";
			
			$query = $this->db->query("select plans,tasks,extraTasks from reports WHERE userId = $userId and weekNumber = $weekNumber");


			return $query->row();
			//return $query->result();
			//return $query->result_array();
			//return "select plans,tasks,extraTasks from reports WHERE userId = $userId";
		 
		}
	public function	post_schedules($post)
	{
		$createTime = date("Y-m-d h:i:s");

		$sql = "INSERT INTO reports(userId,username,createTime,plans,tasks,extraTasks,weekNumber) VALUES(?,?,?,?,?,?,?)";

		$res = $this->db->query($sql, array($post['userId'],$post['userName'],$createTime,$post['plans'],$post['tasks'],$post['extraTasks'],$post['weekNumber']) );
		return $res;
	
	}

	public function get_users($curpage = 1,$pagesize = 10)
	{
		$start = ($curpage - 1) * $pagesize;
   
		$query = $this->db->query ("select * from users limit $start,$pagesize");
        return $query->result_array();
   
	}
	public function get_user_detail($id = FALSE)
	{
		$query = $this->db->get_where('users', array('id' => $id));
		return $query->row_array();
	}

}
