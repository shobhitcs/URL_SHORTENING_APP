const randomstring = require("randomstring");
const Url = require('../models/urlmodel');

const addurl=async (req,res)=>{
    const {url} = req.body;
    if(!url || url=='') return res.status(400).json({msg: 'Url required'});

    try{
        const find = await Url.findOne({url}); 
        if(find) return res.status(200).json({shorturl:find.shortid});
        const str=randomstring.generate(7);
        const entry= await Url.create({url,shortid:str});
        if(!entry) throw Error('Url Shortening Failed');
        res.status(200).json({shorturl:str});
    }
    catch(err){
        return res.status(500).json({msg: err.message});
    }
}

const geturl=async (req,res)=>{
    const id=req.params.id;
    try{
        const find = await Url.findOne({shortid:id});
        if(!find) return res.status(404).json({msg:'Page Not Found'}); 
        res.redirect(find.url) ;
    }
    catch(err){
        return res.status(500).json({msg: err.message});
    }

}


module.exports = {addurl,geturl};