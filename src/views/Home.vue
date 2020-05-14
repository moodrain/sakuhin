<template>
    <div class="container">
        <HomePc v-if="! mobile" :orderProjects="orderProjects" :techColor="techColor"></HomePc>
        <div v-if="mobile" class="container">
            <el-header>
                <el-menu default-active="recent" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="menuSelect">
                    <el-submenu index="about">
                        <template slot="title">Contact</template>
                        <el-menu-item index="email">Email: <span style="margin-left: 1em;">moerain@qq.com</span></el-menu-item>
                        <el-menu-item index="github">Github: <span style="margin-left: .5em">github.com/moodrain</span></el-menu-item>                        
                        <el-menu-item index="blog">Blog: <span style="margin-left: 1.5em;">muyu.moe</span></el-menu-item>
                    </el-submenu>
                    <el-menu-item index="title" style="font-size: 1.2em;font-weight: 200;">Muyu's Projects</el-menu-item>
                </el-menu>
            </el-header>
            <div class="container" style="margin-top: 60px;">
                <el-row v-for="(project, index) in orderProjects" :key="project.id" style="padding: 10px;">
                    <el-card>
                        <a :href="project.url" target="_blank"><div class="cover" :style="'background-image: url(' + project.cover + ')'"></div></a>
                        <el-divider></el-divider>
                        <p class="title">{{ project.name }}</p>
                        <p class="tech">
                            <el-tag size="mini" effect="dark" :type="techColor[tech]" v-for="tech in project.techs" :key="tech">{{ tech }}</el-tag>
                        </p>
                        <p style="text-indent: 2em;">{{ project.detail }}</p>
                    </el-card>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import HomePc from './HomePc'
    export default {
        props: ['mobile'],
        components: { HomePc },
        data() {
            return {
                order: ['bookmark', 'tuanwei', 'enroll', 'we-cv', 'mall', 'danmu', 'laravel-streamer', 'sync', 'moodrain', 'db', 'mform', 'vocabulary', 'miao', 'wallpaper', 'fanbox'],
                techColor: {
                    PHP: '',
                    Laravel: 'info',
                    NodeJs: 'success',
                    JavaScript: 'success',
                    Bootstrap: 'success',
                    Vue: 'success',
                    Golang: 'warning',
                    OSS: 'info',
                },
                projects: [
                    {
                        id: 'db',
                        name: 'db-builder | 在线 json 转 sql',
                        cover: 'cover/db-builder.png',
                        detail: '提供简单的在线json转sql语句服务，同时自动生成javaBean打包下载。',
                        url: 'http://sakuhin.moodrain.cn/db/',
                        techs: ['PHP'],
                    }, {
                        id: 'enroll',
                        name: 'gdpu-enroll | GDPU 社团招新',
                        cover: 'cover/enroll.png',
                        detail: '移动端优化的多社团多部门招新系统，有适用新生、部长、主任、老师权限的账号。线上制作简历投递，面试短信通知，各阶段报表打印，全方位提高招新效率。曾上线运营，有100多个注册用户。',
                        url: 'http://sakuhin.moodrain.cn/enroll',
                        techs: ['Laravel', 'Bootstrap'],
                    }, {
                        id: 'mform',
                        name: 'mform | 简易表单',
                        cover: 'cover/mform.png',
                        detail: '简易的表单生成器，支持多种元素和属性、字段填充，验证与格式化、异步提交、弹框通知、自定义样式与回调。',
                        url: 'http://sakuhin.moodrain.cn/mform/',
                        techs: ['JavaScript'],
                    }, {
                        id: 'miao',
                        name: 'miao-transform | 喵语翻译',
                        cover: 'cover/miao.png',
                        detail: '提供数字字母与固定文字之间的转换，使用了字符对应的 ASCII 码和 JS 的进制转换。',
                        url: 'http://sakuhin.moodrain.cn/miao/',
                        techs: ['JavaScript'],
                    }, {
                        id: 'mall',
                        name: 'mall | 二手交易市场',
                        cover: 'cover/mall.png',
                        detail: 'Java Spring Boot 实训作业，有买家端和商家端。',
                        url: 'http://sakuhin.moodrain.cn/mall/',
                        techs: ['SpringBoot'],
                    }, {
                        id: 'tuanwei',
                        name: 'tuanwei | GDPU 团委后台',
                        cover: 'cover/tuanwei.png',
                        detail: '重构GDPU校团委官网后台，与校相关部门进行沟通，获取权限账号，利用假期时间完成。兼容远古 PHP5.3 版本，重构之前的前端代码和数据，重写后台，并上线运行。',
                        url: 'http://sakuhin.moodrain.cn/tuanwei/',
                        techs: ['PHP'],
                    }, {
                        id: 'vocabulary',
                        name: 'vocabulary | 记单词',
                        cover: 'cover/vocabulary.png',
                        detail: '模仿扇贝单词的模式，同时通过将单词标签化，能将相关的单词批量联想记忆。',
                        url: 'http://sakuhin.moodrain.cn/word/',
                        techs: ['PHP', 'Bootstrap'],
                    }, {
                        id: 'wallpaper',
                        name: 'wallpaper | 壁纸',
                        cover: 'cover/wallpaper.png',
                        detail: '用于桌面壁纸，从阿里云 OSS 读取图片，每小时自动替换。',
                        url: 'http://sakuhin.moodrain.cn/wall/',
                        techs: ['PHP', 'OSS'],
                    }, {
                        id: 'we-cv',
                        name: 'we-cv | 简历帮',
                        cover: 'cover/we-cv.png',
                        detail: '大一的校内比赛的参赛作品，在线选择模板制作简历，与部门3个小伙伴共同完成。',
                        url: 'http://sakuhin.moodrain.cn/cv/',
                        techs: ['PHP'],
                    }, {
                        id: 'bookmark',
                        name: 'bookmark | 云书签',
                        cover: 'cover/bookmark.png',
                        detail: '多设备同步的云书签，可配合 Chrome 拓展一键保存书签，桌面、分组、卡片等形式方便书签管理，提升工作效率，做毕业论文和个人日常使用。',
                        url: 'https://v2.moodrain.cn',
                        techs: ['Laravel', 'Vue'],
                    }, {
                        id: 'viewer',
                        name: 'viewer | 局域网文件浏览器',
                        cover: 'cover/viewer.png',
                        detail: '浏览局域网的文件，预览图片和视频，适用于桌面端和移动端。',
                        url: 'https://github.com/moodrain/viewer',
                        techs: ['NodeJs', 'Vue'],
                    }, {
                        id: 'sync',
                        name: 'browser-sync | 文本同步',
                        cover: 'cover/sync.png',
                        detail: '在浏览器之间使用 WebSocket 同步文本，可以选择不同的频道。',
                        url: 'https://sync.moodrain.cn',
                        techs: ['Golang'],
                    }, {
                        id: 'danmu',
                        name: 'bilibili-danmu | B站弹幕播放器',
                        cover: 'cover/danmu.png',
                        detail: '从B站弹幕接口抓取数据（弹幕接口不检测会员），播放本地视频。',
                        url: 'https://github.com/moodrain/bilibili-danmu',
                        techs: ['NodeJs'],
                    }, {
                        id: 'fanbox',
                        name: 'fanbox | P 站 Fanbox 下载器',
                        cover: 'cover/fanbox.png',
                        detail: 'P站 Fanbox 作者下载器，抓取作者所有文章和图片下载。',
                        url: 'https://github.com/moodrain/pixiv-fanbox-downloader',
                        techs: ['PHP'],
                    }, {
                        id: 'moodrain',
                        name: 'moodrain | PHP 工具库',
                        cover: 'cover/moodrain.png',
                        detail: '个人用 PHP 工具库，可通过 Composer 安装，附带 JSON 配置、Curl 封装、阿里云 OSS、FTP 客户端、域名解析等工具。',
                        url: 'https://github.com/moodrain/moodrain',
                        techs: ['PHP'],
                    }, {
                        id: 'laravel-streamer',
                        name: 'LaravelStreamer | Laravel 流媒体',
                        cover: 'cover/laravel-streamer.png',
                        detail: '在 Laravel 中实现以流媒体的形式播放本地视频文件',
                        url: 'https://github.com/moodrain/laravel-streamer',
                        techs: ['Laravel'],
                    }
                ]
            }
        },
        methods: {
            menuSelect(index) {
                switch(index) {
                    case 'email': window.open('mailto: moerain@qq.com', '_blank');break
                    case 'github': window.open('https://github.com/moodrain', '_blank');break
                    case 'blog': window.open('http://muyu.moe', '_blank');break
                }
            }
        },
        computed: {
            orderProjects() {
                let projects = this.projects
                let orderProjects = []
                this.order.forEach(id => {
                    orderProjects.push(projects.filter(p => p.id == id)[0])
                })
                return orderProjects
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
.el-menu--horizontal {
    display: flex;
    flex-direction: row-reverse;
}
</style>