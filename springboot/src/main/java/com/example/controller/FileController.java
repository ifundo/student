package com.example.controller;

import cn.hutool.core.io.FileUtil;
import com.example.common.Result;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;

@RestController
@RequestMapping("/files")
public class FileController {

    @Value("${server.ip}")
    private String ip;

    @Value("${server.port}")
    private String port;

    private static final String ROOT_PATH = System.getProperty("user.dir") + "/files";

    @PostMapping("uploadFile")
    public Result uploadFile(MultipartFile file) throws IOException {
        //有可能重名
        String originalFilename = file.getOriginalFilename();
        //加上当前时间点 防止覆盖
        long currentTimeMillis = System.currentTimeMillis();
        String fileName = currentTimeMillis + "_" + originalFilename;
        File filePath = new File(ROOT_PATH + "/" + fileName);
        if (!filePath.getParentFile().exists()) {
            filePath.getParentFile().mkdirs();
        }
        file.transferTo(filePath);
        //返回url
        String url = "http://"+ ip +":"+ port +"/files/downloadFile?file=" +fileName;
        return Result.success(url);
    }

    @GetMapping("/downloadFile")
    public Result downloadFile(String file, HttpServletResponse response) throws IOException {
        File filePath = new File(ROOT_PATH + "/" + file);
        ServletOutputStream os = response.getOutputStream();
        response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(file, "UTF-8"));
//        response.setContentType("application/octet-stream");
        response.setContentType("application/json");
//        os.write(FileUtil.readBytes(filePath));
        FileUtil.writeToStream(filePath, os);
        os.flush();
        os.close();
        return Result.success();
    }
}
