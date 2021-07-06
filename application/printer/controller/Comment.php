<?php

namespace app\printer\controller;

use app\common\controller\Frontend;

class Comment extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function index()
    {
        return $this->view->fetch();
    }

}
