<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">EduCov</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
        <div class="container mt-3">
            <div class="d-flex justify-content-between">
                <div>
                    <button @click.prevent="createQuestion" class="btn btn-sm btn-primary">Ask Question</button>
                </div>
                <div class="fw-bold">Nzaman Piash</div>
            </div>
            <hr>
            <div v-for="(ques,index) in questions" :key="'ques'+index" class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <div>{{ques.question}}</div>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <div class="fw-bold">Answered by</div>
                        <div>{{ques.answerDetail.by}}</div>
                    </div>
                    <p class="card-text">{{ques.answerDetail.answer}}</p>
                </div>
            </div>
        </div>
        <div class="modal fade" id="questionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Question</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="text-left">
                        <div class="mb-3">
                            <div style="text-align: left;" for="exampleInputEmail1">Question</div>
                            <textarea v-model="questionForm" class="form-control form-control-sm" placeholder="Write your question">

                            </textarea>
                        </div>
                        <button type="submit" class="btn btn-sm btn-success" style="width:100%">Submit</button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Student',
    data(){
        return{
            questionForm:'',
            questions:[
                {
                    question:'How cloud computing works?',
                    answerDetail:{
                        by:'Mr. Smith',
                        answer:`In more advanced terms, cloud technology works through data centers. 
                        Instead of using the storage space on your phone, computer or tablet, 
                        your information is housed in virtual servers.`
                    }
                },
                {
                    question:'How cloud computing works?',
                    answerDetail:{
                        by:'Mr. Smith',
                        answer:`In more advanced terms, cloud technology works through data centers. 
                        Instead of using the storage space on your phone, computer or tablet, 
                        your information is housed in virtual servers.`
                    }
                }
            ]
        }
    },
    methods:{
        createQuestion(){
            const myModal = new bootstrap.Modal(document.getElementById('questionModal'), {});
            myModal.show();
        }
    }
}
</script>