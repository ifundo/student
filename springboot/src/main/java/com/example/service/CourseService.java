package com.example.service;

import com.example.entity.Course;
import com.example.mapper.CourseMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class CourseService {
    //total 查询的总数  list 是查询返回的列表
    //pageNumber  当前的页数 pageSize每页的个数
    @Resource
    private CourseMapper courseMapper;

    public PageInfo<Course> selectPage(Integer pageNum, Integer pageSize, Course course) {
        PageHelper.startPage(pageNum, pageSize);
        List<Course> courseList = courseMapper.selectAll(course);
        return PageInfo.of(courseList);
    }
    public void addCourse(Course course){
        courseMapper.addCourse(course);
    }

    public void updateCourseById(Course course) {
        courseMapper.updateCourseById(course);
    }

    public void deleteCourseById(Integer id) {
        courseMapper.deleteCourseById(id);
    }
}
