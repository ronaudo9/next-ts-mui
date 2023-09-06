"use client";

import React from "react";
import Header from "../../components/header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid, Select, MenuItem } from "@mui/material";

const SkillEdit = () => {
  return (
    <>
      <Header />
      <Container style={{ padding: "50px 0" }}>
        <Box
          mt={5}
          display="flex"
          flexDirection="column" // 縦方向にコンテンツを並べる
          alignItems="center" // 中央に配置
          justifyContent="space-between"
          height="1800px"
          bgcolor="lightpink"
          p={5}
        >
          <Typography variant="h4" align="center" gutterBottom>
            スキル編集
          </Typography>
          <Box width="100%" mb={2}>
            <Typography>・Skill Point</Typography>
            <Box bgcolor="lightcyan" p={1} my={2} height="250px">
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>・フロントエンド</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "70px", marginLeft: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>・バックエンド</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "70px", marginLeft: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>・DB</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "70px", marginLeft: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>・サーバーレス</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "70px", marginLeft: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>・設計</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "70px", marginLeft: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>・テスト</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "70px", marginLeft: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>・コミュニケーション</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "70px", marginLeft: "10px" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box width="100%" mb={2}>
            <Typography>・Inherent Ability</Typography>
            <Box
              bgcolor="lightcyan"
              p={1}
              my={2}
              height="300px"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Typography style={{ marginTop: "-30px", marginLeft: "20px" }}>
                  Name{" "}
                </Typography>
                <TextField
                  variant="outlined"
                  style={{ width: "400px", marginLeft: "47px" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ marginTop: "-90px", marginLeft: "20px" }}>
                  Description{" "}
                </Typography>
                <TextField
                  variant="outlined"
                  multiline
                  rows={4}
                  style={{ width: "800px", marginLeft: "10px" }}
                />
              </div>
            </Box>
          </Box>
          <Box width="100%" mb={2}>
            <Typography>・Numerical Ability</Typography>
            <Box
              bgcolor="lightcyan"
              p={1}
              my={2}
              height="300px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Typography style={{ marginLeft: "20px" }}>耐障害</Typography>
                  <Select
                    variant="outlined"
                    value={1} // この値は状態管理を通じて動的に変更する必要があります
                    style={{ width: "50px", marginLeft: "20px" }}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography style={{ marginLeft: "20px" }}>
                    項目説明
                  </Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: "700px", marginLeft: "10px" }}
                  />
                </div>
              ))}
            </Box>
          </Box>
          <Box width="100%" mb={2}>
            <Typography>・Special Ability</Typography>
            <Box
              bgcolor="lightcyan"
              p={1}
              my={2}
              height="100px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {[
                  "予知能力",
                  "テックリード",
                  "Vim職人",
                  "Shell芸人",
                  "超ポジティブ",
                  "遅刻魔",
                  "気分屋",
                ].map((label, index) => (
                  <Button key={index} variant="contained" color="warning">
                    {label}
                  </Button>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {[
                  "新人",
                  "おしゃべりクソ野郎",
                  "ガヤ",
                  "アンテナ",
                  "フランス語",
                  "Apple信者",
                  "Vertica教徒",
                ].map((label, index) => (
                  <Button key={index} variant="contained" color="success">
                    {label}
                  </Button>
                ))}
              </div>
            </Box>
          </Box>
          <Button type="submit" variant="contained" color="primary">
            スキル編集完了
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default SkillEdit;
