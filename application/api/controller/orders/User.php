<?php

namespace app\api\controller\orders;

use app\common\controller\Api;

/**
 * 订单接口（普通用户）
 */
class User extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function add()
    {
        $user = $this->auth->getUser();
        $this->success('请求成功',$user);
    }
}
