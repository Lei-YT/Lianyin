<?php

namespace app\common\model;

use think\Model;


class UserAddress extends Model
{

    

    

    // 表名
    protected $name = 'user_address';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    

    







    public function area()
    {
        return $this->belongsTo('Area', 'province_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
