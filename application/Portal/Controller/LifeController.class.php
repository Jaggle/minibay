<?php
/**
 * Created by PhpStorm.
 * User: Jake
 * Date: 2016/3/22
 * Time: 0:45
 */

namespace Portal\Controller;


use Common\Controller\HomebaseController;

class LifeController extends HomebaseController
{

    //首页
    public function index() {
        $this->display(":life");
    }
}