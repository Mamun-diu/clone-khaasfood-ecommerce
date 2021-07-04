<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>KhaasFood</title>
    <style>
        *{
            margin : 0;
            padding : 0;
            outline : none;
            box-sizing: border-box;
        }
        .scroll{
            position : fixed;
            right : 10px;
            bottom : 10px;
            background : #fff;
            border-radius: 50%;
            padding : 10px 14px;
            color : #444;
            display : none;
            box-shadow: 0px 0px 5px 1px #ddd;
        }
    </style>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body style="">
    <div class="wrapper" id="home">

        <header>
            <top-header></top-header>
            <main-header></main-header>
        </header>
        <section style="min-height: 400px">
            <router-view></router-view>
        </section>
        <footer>
            <big-footer></big-footer>
        </footer>
        <load-data></load-data>
    </div>
    <span class="scroll">
        <i class="fas fa-arrow-up"></i>
    </span>
    {{-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> --}}
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"></script>

        <script type="text/javascript">
  $(document).ready(function (){
    $("body").tooltip({
      selector : '[data-toggle=tooltip]'
    })
    $(document).on('scroll',function(){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $('.scroll').css({'display':'block'})
            // mybutton.style.display = "block";
        } else {
            $('.scroll').css({'display':'none'})
            // mybutton.style.display = "none";
        }
    })

    $('.scroll').on('click',function(){
        var scrl = document.documentElement.scrollTop;

        var inter = setInterval(() => {
            document.documentElement.scrollTop -= scrl/100
            if(document.documentElement.scrollTop <= 0){
                clearInterval(inter);
            }

        }, 1);

    })
  })
</script>

</body>
</html>
