function Search(text){
    $(".keyword_list").each(function(index, element){
        let keyword = $(element).text();
        if(keyword.indexOf(text) === -1){
            $(element).parent().css("display", "none"); //一致しない画像を非表示
        }else{
            $(element).parent().css("display", "block"); //表示
        }
    });
}

$(".input_text").on("input", function(event){ //キーワード入力時
    let text = $(".input_text").val(); //入力文字を受け取る
    if(text === ""){ //入力内容なし
        $(".filter_img").css("display", "block");　//すべて表示
    }else{　
        Search(text); //検索開始
    }
});