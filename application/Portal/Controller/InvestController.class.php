<?php
/**
 * Created by PhpStorm.
 * User: Jake
 * Date: 2016/3/22
 * Time: 0:44
 */

namespace Portal\Controller;


use Common\Controller\HomebaseController;

class InvestController extends HomebaseController
{
    //首页
    public function index() {
        $this->display(":invest");
    }
}