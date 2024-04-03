package com.example.controller;

import com.example.common.Result;
import com.example.entity.Account;
import com.example.service.AccountService;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Resource
    private AccountService accountService;

    @GetMapping("/selectPage")
    public Result selectPage(@RequestParam(defaultValue = "1") Integer pageNum,
                             @RequestParam(defaultValue = "5") Integer pageSize,
                             Account account){
        System.out.println("account = " + account);
        PageInfo<Account> pageInfo = accountService.selectPage(pageNum, pageSize, account);
        return Result.success(pageInfo);
    }

    @PostMapping("/addAccount")
    public Result addAccount(@RequestBody Account account){
        accountService.addAccount(account);
        return Result.success();
    }

    @DeleteMapping("/deleteAccountById/{id}")
    public Result deleteAccount(@PathVariable Integer id){
        accountService.deleteAccountById(id);
        return Result.success();
    }

    @PutMapping("/updateAccountById")
    public Result updateAccount(@RequestBody Account account){
        accountService.updateAccountById(account);
        return Result.success();
    }
    @GetMapping("/selectAccount")
    public Result selectAccount(@RequestParam String username,@RequestParam String role){
        Account account =  accountService.selectAccountByUsername(username,role);
        return Result.success(account);
    }
}
