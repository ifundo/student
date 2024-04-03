package com.example.mapper;


import com.example.entity.Account;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface AccountMapper {

    @Select("select * from account where username like concat('%', #{username}, '%') and name like concat('%', #{name}, '%') and role = 'ADMIN' order by id")
    List<Account> selectAll(Account account);

    @Select("select * from account where username = #{username} and role = #{role}")
    Account selectByUsername(String username, String role);

    @Insert("insert into account(username, password, name, phone, email, sex, birth, avatar, role) " +
            "values(#{username}, #{password}, #{name}, #{phone}, #{email}, #{sex}, #{birth}, #{avatar}, #{role})")
    void register(Account account);

    @Delete("delete from account where id = #{id}")
    void deleteAccountById(Integer id);

    @Update("update account set username = #{username}, password = #{password}, name = #{name}, phone = #{phone}, email = #{email}, sex = #{sex},birth=#{birth} , avatar = #{avatar} where id = #{id}")
    void updateAccountById(Account account);

    @Select("select * from account where username = #{username} and role = #{role}")
    Account selectAccountByUsername(String username, String role);
}
