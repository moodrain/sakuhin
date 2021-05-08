<template>
    <div class="container">
        <el-header>
            <el-menu default-active="recent" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="menuSelect">
                <el-menu-item index="title" style="font-size: 1.2em;font-weight: 200;width: 85%">Muyu's Projects</el-menu-item>
                <el-submenu index="about" style="width: 15%;text-align: right;">
                    <template slot="title">Contact</template>
                    <el-menu-item index="email">Email: <span style="margin-left: 1em;">moerain@qq.com</span></el-menu-item>
                    <el-menu-item index="github">Github: <span style="margin-left: .5em">github.com/moodrain</span></el-menu-item>                        
                    <el-menu-item index="blog">Blog: <span style="margin-left: 1.5em;">www.moodrain.cn</span></el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header>
        <div class="project-container">
            <el-card v-for="(project, index) in orderProjects" :key="project.id">
                <a :href="project.url" target="_blank"><div class="cover" :style="'background-image: url(' + project.cover + ')'"></div></a>
                <el-divider></el-divider>
                <p class="title">{{ project.name }}</p>
                <p class="tech">
                    <el-tag size="mini" effect="dark" :type="techColor[tech]" v-for="tech in project.techs" :key="tech">{{ tech }}</el-tag>
                </p>
                <p style="text-indent: 2em;">{{ project.detail }}</p>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    props: ['orderProjects', 'techColor'],
    methods: {
        menuSelect(index) {
            switch(index) {
                case 'email': window.open('mailto: moerain@qq.com', '_blank');break
                case 'github': window.open('https://github.com/moodrain', '_blank');break
                case 'blog': window.open('https://www.moodrain.cn', '_blank');break
            }
        }
    },
}
</script>

<style scoped>
.cover {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}
.title {
    font-size: 1.3em;
    margin-bottom: 5px;
}
.tech {
    margin-bottom: 5px;
}
.tech .el-tag {
    margin: 0 2px;
}
.el-header {
    width: 100%;
    padding: 0;
    position: fixed;
    z-index: 9999;
    top: 0;
}
.project-container {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.el-card {
    width: 23%;
    margin: 2%;
    transition: .4s;
}
.el-card:hover {
    border: 1px solid lightgray;
    transform: scale(1.1);
}
</style>
