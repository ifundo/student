package com.example.controller;

import cn.hutool.core.util.ObjectUtil;
import com.example.common.Result;
import com.example.common.RoleEnum;
import com.example.entity.Account;
import com.example.service.AccountService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.security.auth.login.LoginContext;

@RestController
public class WebController {

    @Resource
    private AccountService accountService;

    /**
     * 默认请求接口
     */
    @GetMapping("/")
    public Result hello() {
        return Result.success();
    }

    /**
     * 登陆接口
     */
    @PostMapping("/login")
    public Result login(@RequestBody Account account) {
        Account dbAccount;
        if (RoleEnum.ADMIN.name().equals(account.getRole()) || RoleEnum.STUDENT.name().equals(account.getRole())){
            dbAccount = accountService.login(account);
            return Result.success(dbAccount);
        }else {
            return Result.error("登陆失败(角色错误)");
        }
    }
    @PostMapping("/register")
    public Result register(@RequestBody Account account) {
        if (ObjectUtil.isAllEmpty(account.getUsername()) || ObjectUtil.isAllEmpty(account.getPassword())){
            return Result.error("账号或者密码为空");
        }
        accountService.register(account);
        return Result.success();
    }
}

