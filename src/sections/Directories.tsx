import React from 'react'
//  ui
import { Pane, Text, Button } from 'evergreen-ui';

const Directories = () => {
    return (
        <div>

            {/* List directories out, or can create one */}
            {/* When click on directory they are directory to the main directory page */}
            <Pane
                elevation={1}
                backgroundColor="white"
                width={200}
                height={200}
                borderRadius={15}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Button
                    fontWeight="bold"
                    fontSize="large"
                    fontFamily='ui-monospace, Menlo, Monaco, "Cascadia Mono"'
                >
                    + Directory
                </Button>
            </Pane>

            {/* View your directories */}
            {/* Create a directory */}
        </div>
    )
}

export default Directories