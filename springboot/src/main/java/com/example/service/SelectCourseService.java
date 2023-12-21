package com.example.service;

import com.example.entity.SelectCourse;
import com.example.exception.CustomException;
import com.example.mapper.SelectCourseMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class SelectCourseService {
    @Resource
    private SelectCourseMapper selectCourseMapper;

    public void addSelectCourse(SelectCourse selectCourse) {
        SelectCourse dbSelectCourse = selectCourseMapper.selectById(selectCourse);
        if (dbSelectCourse != null) {
            throw new CustomException("您已经选过该课");
        }
        selectCourseMapper.insert(selectCourse);
    }

    public PageInfo<SelectCourse> selectPage(Integer pageNum, Integer pageSize, SelectCourse selectCourse) {
        PageHelper.startPage(pageNum, pageSize);
        List<SelectCourse> selectCourseList = selectCourseMapper.selectAll(selectCourse);
        return PageInfo.of(selectCourseList);
    }

    public void deleteCourse(Integer courseId) {
        selectCourseMapper.deleteCourse(courseId);
    }
}
