package com.example.entity;

public class Course {
    private int id;
    private String name;
    private String no;
    private String descr;
    private String times;
    private String teacher;

    public Course() {
    }

    public Course(int id, String name, String no, String descr, String times, String teacher) {
        this.id = id;
        this.name = name;
        this.no = no;
        this.descr = descr;
        this.times = times;
        this.teacher = teacher;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getTimes() {
        return times;
    }

    public void setTimes(String times) {
        this.times = times;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}
