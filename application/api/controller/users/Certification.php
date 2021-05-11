<?php

namespace app\api\controller\users;

use app\common\controller\Api;

/**
 * 实名认证
 */
class Certification extends Api
{
    protected $noNeedLogin = [];
    protected $noNeedRight = ['*'];

    /**
     * 提交实名认证
     */
    public function save() {
        $this->success('请求成功');
    }    


}
