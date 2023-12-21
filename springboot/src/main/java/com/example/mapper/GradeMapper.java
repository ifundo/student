package com.example.mapper;

import com.example.entity.Grade;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

public interface GradeMapper {

    @Insert("insert into grade (id, courseId, studentId, score, comment, feedback) " +
            "values (#{id}, #{courseId}, #{studentId}, #{score}, #{comment}, #{feedback})")
    void insert(Grade grade);

//    @Select("select * from grade")
    List<Grade> selectAll(Grade grade);

    @Update("update grade set score = #{score}, comment = #{comment}, feedback = #{feedback} where id = #{id}")
    void update(Grade grade);


    @Select("select * from grade where studentId = #{studentId} and courseId = #{courseId}")
    Grade selectByCondition(Grade grade);

    @Delete("delete grade from grade where id = #{id}")
    void delete(Integer id);
}
