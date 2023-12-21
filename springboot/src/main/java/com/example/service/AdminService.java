package com.example.service;

import com.example.entity.Account;
import com.example.entity.Admin;
import com.example.exception.CustomException;
import com.example.mapper.AdminMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class AdminService {
    @Resource
    private AdminMapper adminMapper;
    public Account login(Account account){
        Account dbAdmin = adminMapper.selectByUsername(account.getUsername());
        if (dbAdmin == null){
            throw new CustomException("该用户不存在");
        }
        if (!account.getPassword().equals(dbAdmin.getPassword())){
            throw new CustomException("密码错误");
        }
        return dbAdmin;
    }
}
