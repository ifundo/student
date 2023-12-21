package com.example.controller;

import cn.hutool.core.util.ObjectUtil;
import com.example.common.Result;
import com.example.common.RoleEnum;
import com.example.entity.Account;
import com.example.entity.Admin;
import com.example.entity.Student;
import com.example.service.AdminService;
import com.example.service.StudentService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.security.auth.login.LoginContext;

@RestController
public class WebController {

    @Resource
    private AdminService adminService;

    @Resource
    private StudentService studentService;


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
        if (RoleEnum.ADMIN.name().equals(account.getRole())){
            dbAccount = adminService.login(account);
        }else if(RoleEnum.STUDENT.name().equals(account.getRole())){
            dbAccount = studentService.login(account);
        }else {
            return Result.error("登陆失败(角色错误)");
        }
        return Result.success(dbAccount);
    }
    @PostMapping("/register")
    public Result register(@RequestBody Account account) {
        if (ObjectUtil.isAllEmpty(account.getUsername()) || ObjectUtil.isAllEmpty(account.getPassword())){
            return Result.error("账号或者密码为空");
        }
        studentService.register(account);
        return Result.success();
    }
}

