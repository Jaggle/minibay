<?php
/**
 * Created by PhpStorm.
 * User: Jake
 * Date: 2016/3/22
 * Time: 0:43
 */

namespace Portal\Controller;


use Common\Controller\HomebaseController;

class ProductController extends HomebaseController
{
    //首页
    public function index() {
        $this->display(":product");
    }
}