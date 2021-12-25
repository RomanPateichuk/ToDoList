<template>
  <div class="wrapper">
    <div class='wrapper__main'>
      <header class="header"><h1>to do list</h1></header>   
    <main class="main">
        <div class="tasks__wrapper">
        <div class="task">
         <input type="checkbox" class="check__done" id='check1' />
         <label for='check1' class="task__text"> Task 1</label>
         <input type="checkbox" class="check__remove" id="task__remove1"/>
         <label for='task__remove1' class="task__remove"></label>
        </div>
        <div class="task">
           <input type="checkbox" class="check__done" id='check2'/>
           <label for='check2' class="task__text"> Task 2</label>
           <input type="checkbox" class="check__remove" id="task__remove2"/>
           <label for='task__remove2' class="task__remove"></label>
        </div>
        <div class="task"> 
          <input type="checkbox" class="check__done" id='check3'/>
          <label for='check3' class="task__text">Task 3</label>
          <input type="checkbox" class="check__remove" id="task__remove3"/>
          <label for='task__remove3' class="task__remove"></label>
        </div>
        <div class="task new__task">
          <p class="task__text">Add a new task</p>
        </div>
      </div>
    </main>
        <footer class="footer">
        <div class="footer__progress">1/3 left</div>
        <div class="footer__btn-wrapper">
          <button class="btn">All</button>
          <button class="btn">Active</button>
          <button class="btn">Completed</button>
        </div>
      </footer> 
    </div>
    <img src="../assets/img/background_img.png" alt="background">
  </div>
</template>

<style scoped lang="scss">

.wrapper{
   @media (max-width: 280px) { 
      font-size: 1rem;
  }
  max-width: 73.625rem;
  padding: 0 5% 0 5%;
  margin: 5% auto 0 auto;
  
  img{
    z-index: 1;
    position: absolute;
    right: 9%;
    top: -6%;
    
  }
 
  .wrapper__main{
    background-color: white;
    max-width: 33.75rem;
    margin: 0 auto;
    z-index: 2;
    position: relative;
   
      .header{
        font-family: 'Open Sans', sans-serif;
        background-color: #FFCA93;
        text-align: center;
        height: 3.125rem;

          h1{
          font-size: 1.25rem;
          line-height: 2.5rem;
          }
      }

      .main{
        display: flex;
        padding: 0 1.875rem 0 1.875rem;
        flex-direction: column;
        @media (max-width: 450px) { 
          padding: 0 .5rem 0 .5rem;
        } 
          .tasks__wrapper{
            margin: 1.875rem 0;
              .task{   
              display: flex;
              background: #FFDFBE;
              border-radius: .625rem;
              padding: 0 1.25rem 0 1.25rem;
              height: 3.125rem;
              justify-content: flex-start;
              align-items: center;
              position: relative;

              .check__done, .check__remove{   
                appearance: none;
                &:checked{
                  + label{
                   &:after{
                     opacity: 1;
                   }
                  }
                }
              }

              .task__text{ 
                color: #7F4B13;
                padding: 0  1.4375rem  0 3rem;
            
                &:before{   
                  content: "";
                  display: block;
                  width: 1.5rem;
                  height: 1.5rem;
                  background: #FEB567;
                  border-radius: 5px;
                  position: absolute;
                  top: .75rem;
                  left: 1.25rem;
                }
    
                &:after {
                  content: '';
                  display: block;
                  width: 9.43px;
                  height: 13.71px;
                  border: 1px solid #FFFFFF;
                  border-left: none;
                  border-top: none;
                  position: absolute;
                  transform: rotate(45deg);
                  top: .9375rem;
                  left: 1.75rem;
                  opacity: 0; 
                }
              }
               
              &:not(:first-child){
              margin: 1.5625rem 0 0 0;
              }
          
              :last-child{
              margin-left: auto;
              }
              
              .task__remove{
                &:before{   
                  content: url("../assets/img/close_disable.png");
                  border: none;
                  position: absolute;
                  left: 90%;
                  top: 25%;
                   @media (max-width: 370px) { 
                   left: 85%
                  }
                }
    
                &:after {
                  content: url("../assets/img/close_active.png");
                  border: none;
                  position: absolute;
                  left: 90%;
                  top: 25%;
                  opacity: 0;
                   @media (max-width: 370px) { 
                   left: 85%
                  }
                }
              }
              
              }  
              
              .new__task{
              background: #FFECD8; 
              border: 1.5px dashed #FFCA93;
              justify-content: center; 
                       
              .task__text{
                 color: #FFCA93; 
                 padding: 0  1.4375rem  0 1.4375rem; 

                  &:after{
                   display: none;
                 }

                  &:before{
                    display: none;
                  }
                }
              
                 :last-child{
                  margin-left: 0;
                 }

              } 
          }
        }

      .footer{
        display: flex;
        height: 3.125rem;
        justify-content: space-between;
        align-items: center;
        background: #FFCA93;
        padding: 0 1.875rem 0 1.875rem;
        font-family: 'Open Sans', sans-serif;
         @media (max-width: 410px) { 
         font-size: 1rem;
         padding: 0 1rem 0 1rem;
          }
          @media (max-width: 314px) { 
          flex-direction: column;
          }
      
          *{
            color: rgba(127, 75, 19, .42)
          }
      
          .footer__btn-wrapper{
            :not(:last-child){
              margin-right: 1.5625rem;
                 @media (max-width: 520px) { 
                  margin-right: 0;
              }
            }
        
            .btn{
              border: 1px solid rgba(0, 0, 0, 0);
              box-sizing: border-box;
              padding: .625rem;
               @media (max-width: 520px) { 
                  padding: .3125rem
              }
            }
          .btn:hover{
              border: 1px solid #C9955D;
              border-radius: 10px;
            }

          }
        }
  }
}
</style>
