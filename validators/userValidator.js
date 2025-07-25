const userConstraints = {
    username:{
        presence:true,
        length:{
            minimum:5,
            maximum:10,
            tooShort: "Try more charaters, at least 5",
            tooLong: "Such creativity, the maximum number of characters is 10 unfortunately :("
        }
    }
};

module.exports = userConstraints;

