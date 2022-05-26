$(function() {
    // id属性がtoggleの要素がクリックされたら
    $('#toggle').on('click', function(){
      // id属性がtargetの要素にclass属性'sample'を追加／削除する
      $('#target').toggleClass('sample');
    });
  });