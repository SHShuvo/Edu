<template>
    <div>
        <div class="cover-item" style="backgroundImage:url(/cover.jpg)">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">EduCov</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <button @click.prevent="loginModal" class="btn btn-sm btn-primary nav-login-button-collapse">Login</button>
                            </li>
                        </ul>
                    </div>
                    <button @click.prevent="loginModal" class="btn btn-sm btn-primary nav-login-button">Login</button>
                </div>
            </nav>
            
            <div class="cover-caption col-md-5 col-lg-4 col-xl-4">
                <h6 style="font-size: 0.8rem;">Make Education Easy</h6>
                <h4 class="fw-bold mb-0">Welcome to Educov</h4>
                <div class="fw-bold text-danger">Start getting answers to questions in no time!</div>
            </div>
        </div>
        <div class="container" style="margin-top:50px;">
            <div class="text-center">
                <h3>How does it works?</h3>
                <h5>Just flow along the steps!</h5>
            </div>
            <div class="row mt-4">
                <div class="col-md-4 text-center">1. Sign up and get started</div>
                <div class="col-md-4 text-center">2. Write down your question related to any subject</div>
                <div class="col-md-4 text-center">3. Get your question answered by our top academical individuals</div>
            </div>
        </div>

        <div class="footer-item" style="backgroundImage:url(/footer.jpg)">
        </div>

        <div class="footer" style="background-color:#1E2023">
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-4">
                        Our Address
                    </div>
                    <div class="col-md-4">
                        Our Contacts
                    </div>
                </div>
            </div>
        </div>

        <!--Login Modal -->
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="text-left">
                        <div class="mb-3">
                            <div style="text-align: left;" for="exampleInputEmail1">Email address</div>
                            <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <div style="text-align: left;" for="exampleInputPassword1">Password</div>
                            <input type="password" class="form-control form-control-sm" id="exampleInputPassword1">
                        </div>
                        <button type="submit" class="btn btn-sm btn-success" style="width:100%">Submit</button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
    data(){
        return{
            logininfo:{
                email:'',
                password:''
            },
            userinfo:[],
            errormessage:[],
        };
    },
    methods:{
        loginModal(){
            const myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
            myModal.show();
        }
    }
}
</script>
<style scoped>
    .cover-item{
        height: 80vh;
        min-height: 300px;
        background: no-repeat center center scroll;
        background-size: cover;
        position: relative;
    }
    .footer-item{
        margin-top:50px;
        height: 250px;
        background: no-repeat center center scroll;
        background-size: cover;
    }
    .footer{
        color: #F0EDF2;
    }

    .navbar-light .navbar-brand {
        color: #712529;
    }
    .bg-light {
        background-color: rgba(255,255,255, .5) !important;
    }
    .nav-login-button{
        display: none;
    }

    .cover-caption {
        background: rgba(225, 225, 225, .7);
        padding: 1rem 1rem .5rem 1.5rem;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        -khtml-border-radius: 10px;
    }
    .cover-caption {
        position: absolute;
        right: 15%;
        bottom: 40px;
        left: 8%;
        z-index: 10;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #712529;
        text-align: left;
    }

    @media (min-width: 992px) {
        .nav-login-button{
            display: block;
        }
        .nav-login-button-collapse{
            display: none;
        }
    }

</style>
