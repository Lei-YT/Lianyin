<?php

namespace app\api\controller\users;

use app\common\controller\Api;

/**
 * 基本信息
 */
class Baseinfo extends Api
{
    protected $noNeedLogin = [];
    protected $noNeedRight = ['*'];

    /**
     * 我的
     */
    public function mine() {
        $this->success('请求成功');
    }  

    /**
     * 基本信息查询
     */
    public function base() {
        $this->success('请求成功');
    }    


    /**
     * 编辑
     */
    public function edit() {

    }


}
