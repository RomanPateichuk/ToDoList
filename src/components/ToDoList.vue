<template>
  <div class="wrapper">
    <div class="wrapper__main">
      <header class="header"><h1>to do list</h1></header>
      <main class="main">
        <div class="tasks__wrapper">
          <div class="task">
            <label class="task__text">
              <input type="checkbox" class="task__done" />
              <span class="text">Task 1</span>
            </label>
            <button class="task__remove">&times;</button>
          </div>
          <div class="task">
            <label class="task__text">
              <input type="checkbox" class="task__done" />
              <span class="text">Task 1</span>
            </label>
            <button class="task__remove">&times;</button>
          </div>
          <div class="task">
            <label class="task__text">
              <input type="checkbox" class="task__done" />
              <span class="text">Task 1</span>
            </label>
            <button class="task__remove">&times;</button>
          </div>
          <div class="task new__task">
            <input type="text" class="add__task" placeholder="Add a new task" />
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
    <img src="../assets/img/background_img.png" alt="background" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @media (max-width: 280px) {
    font-size: 1rem;
  }
  max-width: 73.625rem;
  padding: 0 5% 0 5%;
  margin: 5% auto 0 auto;

  img {
    z-index: 1;
    position: absolute;
    right: 9%;
    top: -6%;
  }

  .wrapper__main {
    background-color: white;
    max-width: 33.75rem;
    margin: 0 auto;
    z-index: 2;
    position: relative;

    .header {
      font-family: "Open Sans", sans-serif;
      background-color: #ffca93;
      text-align: center;
      height: 3.125rem;

      h1 {
        font-size: 1.25rem;
        line-height: 2.5rem;
      }
    }

    .main {
      display: flex;
      padding: 0 1.875rem 0 1.875rem;
      flex-direction: column;
      @media (max-width: 450px) {
        padding: 0 0.5rem 0 0.5rem;
      }
      .tasks__wrapper {
        margin: 1.875rem 0;
        .task {
          display: flex;
          background: #ffdfbe;
          border-radius: 0.625rem;
          padding: 0 1.25rem 0 1.25rem;
          height: 3.125rem;
          justify-content: flex-start;
          align-items: center;
          position: relative;

          .task__text {
            color: #7f4b13;
            padding: 0 1.4375rem 0 3rem;

            .text {
              &:before {
                content: "";
                display: block;
                width: 1.5rem;
                height: 1.5rem;
                background: #feb567;
                border-radius: 5px;
                position: absolute;
                top: 0.8125rem;
                left: 1.25rem;
              }

              &:after {
                content: "";
                display: block;
                width: 9.43px;
                height: 13.71px;
                border: 1px solid #ffffff;
                border-left: none;
                border-top: none;
                position: absolute;
                transform: rotate(45deg);
                top: 0.9375rem;
                left: 1.75rem;
                opacity: 0;
              }
            }

            .task__done {
              appearance: none;
            }

            .task__done:checked {
              + .text {
                text-decoration: line-through;
                &:after {
                  opacity: 1;
                }
              }
            }
          }

          &:not(:first-child) {
            margin: 1.5625rem 0 0 0;
          }

          :last-child {
            margin-left: auto;
          }

          .task__remove {
            display: flex;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            border: 1.5px solid #ffca93;
            color: #ffca93;
            border-radius: 0.3125rem;

            &:hover {
              border: 1.5px solid #fc8f1a;
              color: #fc8f1a;
              cursor: pointer;
            }
          }
        }

        .new__task {
          background: #ffecd8;
          border: 1.5px dashed #ffca93;
          justify-content: center;

          &:focus {
            ::placeholder {
              opacity: 1;
            }
          }

          &:focus-within {
            background: #ffffff;
          }

          .add__task {
            color: #ffca93;
            width: 100%;
            border: none;
            background-color: inherit;
            &::placeholder {
              color: inherit;
              text-align: center;
            }
          }

          :last-child {
            margin-left: 0;
          }
        }
      }
    }

    .footer {
      display: flex;
      height: 3.125rem;
      justify-content: space-between;
      align-items: center;
      background: #ffca93;
      padding: 0 1.875rem 0 1.875rem;
      font-family: "Open Sans", sans-serif;
      @media (max-width: 410px) {
        font-size: 1rem;
        padding: 0 1rem 0 1rem;
      }
      @media (max-width: 314px) {
        flex-direction: column;
      }

      * {
        color: rgba(127, 75, 19, 0.42);
      }

      .footer__btn-wrapper {
        :not(:last-child) {
          margin-right: 1.5625rem;
          @media (max-width: 520px) {
            margin-right: 0;
          }
        }

        .btn {
          border: 1px solid rgba(0, 0, 0, 0);
          box-sizing: border-box;
          padding: 0.625rem;
          @media (max-width: 520px) {
            padding: 0.3125rem;
          }
        }
        .btn:hover {
          border: 1px solid #c9955d;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
