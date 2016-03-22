<?php

namespace Portal\Controller;

use Common\Controller\HomebaseController;

class ArticleController extends HomebaseController {

	public function index($id){
		$article = M('Posts')->where(['id'=>$id])->find();
		$this->assign('article',$article);
		$this->display("/Article/detail");
	}

	public function test(){
echo 		sp_password('jakesoft');
	}

}
