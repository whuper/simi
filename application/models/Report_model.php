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
	public function get_schedules_by_type($get)
	{

			if($get['type'] == 'department'){
						$filter_array = array('department'=>$get['val'],'weekNumber'=>$get['weekNumber']);
			} else {
						$filter_array = array('team' => $get['val'],'weekNumber'=>$get['weekNumber']);
						//$filter_array = array('team' => $get['val']);
			}
		
			$query = $this->db->get_where('reports',$filter_array);

			//echo $this->db->last_query();die;

			return $query->result_array();	
	
	}
	
	public function	post_schedules($post)
	{
		$createTime = date("Y-m-d h:i:s");

		$sql = "INSERT INTO reports(userId,username,createTime,plans,tasks,extraTasks,weekNumber,team,department) VALUES(?,?,?,?,?,?,?,?,?)";

		$res = $this->db->query($sql, array($post['userId'],$post['userName'],$createTime,$post['plans'],$post['tasks'],$post['extraTasks'],$post['weekNumber'],$post['team'],$post['department']));
		return $res;
	
	}
	public function	update_schedules($post){

		  $data = array(
               'plans' => $post['plans'],
               'extraTasks' => $post['extraTasks'],
               'tasks' => $post['tasks']
            );
			
				if(!isset($post['userId']) || !isset($post['weekNumber'])){
						return false;				
				}

				$this->db->where(array('userId'=>$post['userId'],'weekNumber'=>$post['weekNumber']));
				$this->db->update('reports', $data); 
				$success = $this->db->affected_rows(); 
				if(!$success){
						error_log('Unable to updateUserInfo('.$post['userId'].$post['weekNumber'].')');
						return false;
				} else {
						return true;
				}
	
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
