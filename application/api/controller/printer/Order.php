<?php

namespace app\api\controller\printer;

use app\common\controller\Api;

/**
 * 订单
 */
class Order extends Api
{
    protected $noNeedLogin = [];
    protected $noNeedRight = ['*'];

/**
     * 任务分类
     *
     */
    public function category() {
        $this->success('请求成功');
    }

    /**
     * 任务大厅
     *
     */
    public function task() {
        $this->success('请求成功');
    }

    /**
     * 详情
     *
     */
    public function detail() {
        $this->success('请求成功');
    }

    /**
     * 报价
     */
    public function taking() {
        $this->success('请求成功');
    }

    /**
     * 权限
     */
    public function power() {

    }

    /**
     * 我的订单
     */
    public function list() {

    }
}
