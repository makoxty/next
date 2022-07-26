import React from "react";
import tw from "twin.macro";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const AccountCreate = () => {
  return (
    <div tw="w-full flex justify-center">
      <div tw="mt-10">
        <div tw="text-4xl w-full">アカウント作成</div>
        <div tw="mt-3 w-full">
          <FormControl isRequired>
            <FormLabel fontSize={25}>名前</FormLabel>
            <Input
              placeholder="ヘッド  源流"
              borderRadius={5}
              border="solid 1px"
              borderColor="blue"
              width="100%"
              height="4vh"
            />
            <FormLabel marginTop={10} fontSize={25}>
              id
            </FormLabel>
            <Input
              placeholder="head0123"
              borderRadius={5}
              border="solid 1px"
              borderColor="blue"
              width="100%"
              height="4vh"
            />
          </FormControl>
        </div>
        <div tw="w-full flex justify-center">
          <Button
            bg="blue"
            color="white"
            border="solid 1px"
            borderColor="blue"
            borderRadius={5}
            width={"80%"}
            height={40}
            mt={10}
          >
            登録
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreate;
