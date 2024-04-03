package com.example.service;

import com.example.common.RoleEnum;
import com.example.entity.Account;
import com.example.exception.CustomException;
import com.example.mapper.AccountMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AccountService {
    @Resource
    private AccountMapper accountMapper;
    public Account login(Account account){
        Account dbAccount = accountMapper.selectByUsername(account.getUsername(), account.getRole());
        if (dbAccount == null){
            throw new CustomException("该用户不存在");
        }
        if (!account.getPassword().equals(dbAccount.getPassword())){
            throw new CustomException("密码错误");
        }
        return dbAccount;
    }

    public void register(Account account) {
        Account dbAccount = new Account();
        dbAccount.setUsername(account.getUsername());
        dbAccount.setPassword(account.getPassword());
        this.addAccount(dbAccount);
    }

    public void addAccount(Account account) {
        Account dbAccount = accountMapper.selectByUsername(account.getUsername(), account.getRole());
        if (dbAccount != null){
            throw new CustomException("账号已存在");
        }
        account.setName(RoleEnum.STUDENT.name());
        account.setRole(RoleEnum.STUDENT.name());
        accountMapper.register(account);
    }

    public void deleteAccountById(Integer id) {
        accountMapper.deleteAccountById(id);
    }

    public void updateAccountById(Account account) {
        accountMapper.updateAccountById(account);
    }
    public PageInfo<Account> selectPage(Integer pageNum, Integer pageSize, Account account) {
        PageHelper.startPage(pageNum, pageSize);
        List<Account> accountList = accountMapper.selectAll(account);
        return PageInfo.of(accountList);
    }

    public Account selectAccountByUsername(String username, String role) {
        return accountMapper.selectAccountByUsername(username,role);
    }
}
