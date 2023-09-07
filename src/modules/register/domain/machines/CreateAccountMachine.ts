import { assign, createMachine } from "xstate";

import { CreateAccountRequest } from "../entities";

interface CreateAccountContext {
  request: CreateAccountRequest;
}

const createAccountMachine = () => {
  return createMachine<CreateAccountContext>(
    {
      predictableActionArguments: true,
      id: "createAccount",
      initial: "idle",
      states: {
        idle: {
          on: {
            SUBMIT: {
              target: "submitting",
              actions: ["setRequest"],
            },
          },
        },
        submitting: {
          invoke: {
            src: "createAccount",
            onDone: { target: "success" },
            onError: { target: "error" },
          },
        },
        success: {
          type: "final",
        },
        error: {
          on: {
            SUBMIT: "submitting",
          },
        },
      },
    },
    {
      actions: {
        setRequest: assign((_, event) => ({
          request: event.data,
        })),
      },
    }
  );
};

export default createAccountMachine;
