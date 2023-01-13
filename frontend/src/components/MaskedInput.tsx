import React from 'react';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  mask: string
  name: string
}



type MaskedInputProps = any

const MaskedInput = ({ mask, onChange, value, name, label, sx, ...props }: MaskedInputProps) => {
  const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref) {
      const { onChange, mask, ...other } = props;
      console.log(">>LOG  ~ file: MaskedInput.tsx:16 ~ mask", mask)
      return (
        <IMaskInput
          {...other}
          mask={mask}
          definitions={{
            '#': /[1-9]/,
          }}
          inputRef={ref as any}
          onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
          overwrite
        />
      );
    },
  );

  return (
    <FormControl variant="standard" sx={sx} >
        <InputLabel>{label}</InputLabel>
        <Input
          value={value}
          onChange={onChange}
          name={name}
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>
  )
}



export default MaskedInput;
