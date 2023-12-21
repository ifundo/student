package com.example.mapper;

import com.example.entity.SelectCourse;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface SelectCourseMapper {

    @Insert("insert into selectcourse (courseName, courseNo, studentId, courseId) " +
            "values (#{courseName}, #{courseNo}, #{studentId}, #{courseId})")
    void insert(SelectCourse selectCourse);

    @Select("select * from selectcourse where studentId = #{studentId} and courseId = #{courseId}")
    SelectCourse selectById(SelectCourse selectCourse);

//    @Select("select * from selectcourse where courseName like concat('%', #{courseName}, '%') and courseNo like concat('%', #{courseNo}, '%') and studentId = #{studentId}")
    List<SelectCourse> selectAll(SelectCourse selectCourse);

    @Delete("delete from selectcourse where courseId = #{courseId}")
    void deleteCourse(Integer courseId);
}
