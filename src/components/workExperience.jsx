import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "./myExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";

const experienceNum = 2;

const workExperiencesEnglish = [
  {
    title: "Algorithm Engineering Intern",
    time: "06/2019–09/2019",
    organization:
      "Institute of Computing Technology, Chinese Academy of Science, Beijing, China",
    summary: "Development of a high performance real FFT library on x86 CPUs",
    achievements: [
      "Optimized existing assembly code based on x86 architecture by revising memory allocation, address computation, and cache usage, and implemented the core “split” function for both single and double precision floating point",
      "Found out the reason for low performance of the code, and reformed the code using SIMD, loop unrolling, as well as multi-thread programming",
      "Designed a faster REDFT00 sub-transform algorithm of R2R transform that reduced computational complexity, and wrote a mathematical proof of it",
      "Realized the algorithm in our library, by which the performance on large scale of data exceeded the corresponding performance of MKL and FFTW"
    ]
  },
  {
    title: "CS 577 (Introduction to Algorithm) Peer Mentor",
    time: "01/2019–05/2019",
    organization: "Computer Science Department, UW-Madison, Madison, WI, US",
    summary:
      "Assist professor to provide more learning resources and helps to the class",
    achievements: [
      "Led weekly review sessions through lecture materials and guided student through teaching practice problems",
      "Advised students with their specific questions during individual help sessions and provided feed-backs",
      "Designed practice problems and answered questions on Piazza"
    ]
  }
];

const workExperiencesChinese = [
  {
    title: "算法工程师实习",
    time: "06/2019–09/2019",
    organization: "中国科学院计算技术研究所，中国北京",
    summary: "基于x86架构的高性能FFT开源算法库开发",
    achievements: [
      "基于x86系统架构，通过修改内存分配、地址计算、缓存使用，优化了已有的底层汇编代码，并且实现了核心的“split”函数",
      "找出了代码性能低的原因，利用SIMD、循环展开、多线程编程，重构了部分汇编代码",
      "设计了一个更快的REDFT00变换算法，成功降低了计算复杂度，并且给出了严密的数学证明",
      "在算法库中实现了该新算法，使得性能显著提高，尤其是较大数据输入的性能已经超过了MKL和FFTW的相应性能"
    ]
  },
  {
    title: "CS 577 算法课本科生助教",
    time: "01/2019–05/2019",
    organization: "美国威斯康星大学麦迪逊分校计算机学院",
    summary: "协助教授给学生提供更多学习资源和帮助",
    achievements: [
      "每周根据课上内容带复习课，指导学生做练习题",
      "提供一对一答疑课，根据学生的问题针对性解决疑惑，并提供反馈",
      "出练习题，在线回答问题"
    ]
  }
];

const WorkExperience = props => {
  let workExperiences;
  if (props.language === "Chinese") {
    workExperiences = workExperiencesChinese;
  } else {
    workExperiences = workExperiencesEnglish;
  }
  return (
    <React.Fragment>
      {workExperiences.map((workExperience, index) => (
        <React.Fragment>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div
                style={{
                  flex: 1,
                  background: "#FFFFFF"
                }}
              >
                <Grid
                  container
                  style={{
                    background: "#FFFFFF"
                  }}
                >
                  <Grid item xs={9}>
                    <b>{workExperience.title}</b>
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "right" }}>
                    <b>{workExperience.time}</b>
                  </Grid>
                </Grid>
                <h12>{workExperience.organization}</h12>
                {index === experienceNum - 1 ? <a id="research" /> : null}
                <br />
                {workExperience.summary ? (
                  <React.Fragment>
                    <h12>
                      <font style={{ "font-family": "times" }}>
                        {workExperience.summary}
                      </font>
                    </h12>
                    <br />
                  </React.Fragment>
                ) : null}
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                //background: "#FFFF00",
                padding: 0,
                margin: 0
              }}
            >
              <ul
              //style ={{background:"#FFFF00"}}
              >
                {workExperience.achievements.map((achievement, index2) => (
                  <li key={index2}>
                    {/* {index === experienceNum - 2 && index2 === 3 ? (
                      <a id="research" />
                    ) : null} */}
                    <font style={{ "font-family": "times" }}>
                      {achievement}
                    </font>
                  </li>
                ))}
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          {/* <Divider style={{background:"#FFFFFF", height:8}}/> */}
          <br />
          {/* {index === experienceNum - 2 ? <a id="research" /> : null} */}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default WorkExperience;
