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
          <label class="btn__label">
            <input type="radio" name="radio-footer" /><span class="btn__radio"
              >All</span
            >
          </label>
          <label class="btn__label"
            ><input type="radio" name="radio-footer" /><span class="btn__radio"
              >Active</span
            ></label
          >
          <label class="btn__label"
            ><input type="radio" name="radio-footer" /><span class="btn__radio"
              >Completed</span
            ></label
          >
        </div>
      </footer>
    </div>
    <img src="../assets/img/background_img.png" alt="background" />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.wrapper {
  @media (max-width: 410px) {
    font-size: 1rem;
  }
  max-width: 73.625rem;
  padding: 0 1rem;
  margin: 2.5rem auto 0 auto;

  img {
    z-index: 1;
    position: absolute;
    right: 4rem;
    top: -2rem;
  }

  .wrapper__main {
    background-color: $main;
    max-width: 33.75rem;
    margin: 0 auto;
    z-index: 2;
    position: relative;

    .header {
      font-family: "Open Sans", sans-serif;
      background-color: $header;
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
        padding: 0 0.5rem;
      }
      .tasks__wrapper {
        margin: 1.875rem 0;
        .task {
          display: flex;
          background: $task;
          border-radius: 0.625rem;
          padding: 0 1.25rem;
          height: 3.125rem;
          justify-content: flex-start;
          align-items: center;
          position: relative;

          .task__text {
            color: $task-text;
            padding: 0 1.4375rem 0 3rem;

            .text {
              &:before {
                content: "";
                display: block;
                width: 1.5rem;
                height: 1.5rem;
                background: $task-done;
                border-radius: 0.3125rem;
                position: absolute;
                top: 0.8125rem;
                left: 1.25rem;
              }

              &:after {
                content: "";
                display: block;
                width: 0.589375rem;
                height: 0.856875rem;
                border: 1px solid $main;
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
            border: 1.5px solid $task-remove;
            color: $task-remove;
            border-radius: 0.3125rem;

            &:hover {
              border: 1.5px solid $task-remove-hover;
              color: $task-remove-hover;
              cursor: pointer;
            }
          }
        }

        .new__task {
          background: $new-task-bg;
          border: 1.5px dashed $task-remove;
          justify-content: center;

          &:focus {
            ::placeholder {
              opacity: 1;
            }
          }

          &:focus-within {
            background: $main;
          }

          .add__task {
            color: $task-remove;
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
      min-height: 3.125rem;
      justify-content: space-between;
      align-items: center;
      background: $task-remove;
      padding: 0 1.875rem;
      font-family: "Open Sans", sans-serif;
      @media (max-width: 410px) {
        font-size: 1rem;
        padding: 0 1rem;
      }
      @media (max-width: 314px) {
        flex-direction: column;
      }

      * {
        color: $footer-font-color;
      }

      .footer__btn-wrapper {
        :not(:last-child) {
          margin-right: 1rem;
          @media (max-width: 490px) {
            margin-right: 0;
          }
        }

        .btn__label {
          input[type="radio"] {
            appearance: none;
          }

          input[type="radio"]:checked {
            + .btn__radio {
              border: 1px solid $footer-border-btn;
              border-radius: 10px;
              box-sizing: border-box;
            }
          }

          .btn__radio {
            border: 1px solid transparent;
            box-sizing: border-box;
            padding: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
