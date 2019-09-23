/**
 * Created by chonger on 2019/9/17.
 */

//  模拟数据
var data = {
    teachers: [
        {
            name: "劳海龙 Laurence",
            img: "img/vip_icon1.png",
            describe: [
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                }
            ],
            id: 1
        },
        {
            name: "劳海龙 Laurence",
            img: "img/vip_icon1.png",
            describe: [
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                }
            ],
            id: 2
        },
        {
            name: "劳海龙 Laurence",
            img: "img/vip_icon1.png",
            describe: [
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                },
                {
                    title: "坚小持微课创始人 CEO",
                    value: 1

                }
            ],
            id: 3
        },

    ]
}

addHtml(data)
function addHtml(data) {
    var str = '';
    data.teachers.map(item => {
        str += `<div class="col-6 col-sm-6 col-md-6 col-lg-6 teacher-inner-box">
                    <div class="teacher-img">
                         <img src="${item.img}"/>
                    </div>
                    <div class="teacher-introduce">
                        <div class="teacher-name">${item.name}</div>
                    `
        item.describe.map(item => {
            str += `<div>${item.title}</div>`
        })
        str += `</div></div>`
    })
    $("#teacher").html(str)

}