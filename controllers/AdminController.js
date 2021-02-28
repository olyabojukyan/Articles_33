const { Article }=require("../models/articleModel")


class AdminController{
    AdminView(req, res) {
        res.render("admin")  
    }
async getAllArticles(req, res){
        let Articles=await Article.find()
        res.render("adminArticle", {articles:Articles})
    }
   articleCreateView(req,res){
        res.render("ArticleCreator")  

    }
}
module.exports= new AdminController()