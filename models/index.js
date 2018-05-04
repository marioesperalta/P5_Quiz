const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite:quizzes.sqlite",{logging:false});
sequelize.define('quiz',{
    question:{
        type : Sequelize.STRING,
        unique:{msg: "Question already exists"},
        validate:{notEmpty:{msg: "Question must not be empty"}}
    },
    answer:{
        type:Sequelize.STRING,
        validate:{notEmpty:{msg:"Question must not be empty"}}
    }
});
sequelize.sync()
    .then(()=> sequelize.models.quiz.count())
    .then(count =>{
        if(!count){
            return sequelize.models.quiz.bulkCreate([
                {question:"Capital de Italia", answer:"Roma"},
                {question:"Capital de Francia", answer:"París"},
                {question:"Capital de España", answer:"Madrid"},
                {question:"Capital de Portugal", answer:"Lisboa"}
            ]);
        }
    })
    .catch(error=>{
        console.log(error);
    });
module.exports=sequelize;